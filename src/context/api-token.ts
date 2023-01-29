import { MUTATE_API_TOKEN, GET_API_TOKEN, GetToken, mutate_token, TokenMutationInput } from "@karrio/graphql";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { gqlstr, onError, request, useSessionHeader } from "@/lib/helper";


export function useAPIToken() {
  const headers = useSessionHeader();

  // Queries
  const query = useQuery(
    ['api_token'],
    () => request<GetToken>(gqlstr(GET_API_TOKEN), { ...headers() }),
    { onError, staleTime: 1500000 }
  );

  return {
    query,
  };
}

export function useAPITokenMutation() {
  const headers = useSessionHeader();
  const queryClient = useQueryClient();
  const invalidateCache = () => {
    queryClient.invalidateQueries(['api_token']);
    queryClient.invalidateQueries(['organizations']);
  };

  // Mutations
  const updateToken = useMutation(
    (data: TokenMutationInput) => request<mutate_token>(gqlstr(MUTATE_API_TOKEN), { data, ...headers() }),
    { onSuccess: invalidateCache, onError }
  );

  return {
    updateToken,
  };
}