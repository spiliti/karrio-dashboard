import { TemplateFilter, CreateParcelTemplateInput, CREATE_PARCEL_TEMPLATE, DELETE_TEMPLATE, get_parcel_templates, GET_PARCEL_TEMPLATES, UpdateParcelTemplateInput, UPDATE_PARCEL_TEMPLATE, create_parcel_template, update_parcel_template, delete_template } from "@karrio/graphql";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { gqlstr, onError, request, useSessionHeader } from "@/lib/helper";
import React from "react";

const PAGE_SIZE = 20;
const PAGINATION = { offset: 0, first: PAGE_SIZE };

export function useParcelTemplates() {
  const headers = useSessionHeader();
  const [filter, setFilter] = React.useState<TemplateFilter>(PAGINATION);

  // Queries
  const query = useQuery(
    ['parcels'],
    () => request<get_parcel_templates>(gqlstr(GET_PARCEL_TEMPLATES), { data: filter, ...headers() }),
    { keepPreviousData: true, staleTime: 5000, onError },
  );

  return {
    query,
    filter,
    setFilter,
  };
}


export function useParcelTemplateMutation() {
  const headers = useSessionHeader();
  const queryClient = useQueryClient();
  const invalidateCache = () => {
    queryClient.invalidateQueries(['parcels']);
    queryClient.invalidateQueries(['default_templates']);
  };

  // Mutations
  const createParcelTemplate = useMutation(
    (data: CreateParcelTemplateInput) => request<create_parcel_template>(
      gqlstr(CREATE_PARCEL_TEMPLATE), { data, ...headers() }
    ),
    { onSuccess: invalidateCache, onError }
  );
  const updateParcelTemplate = useMutation(
    (data: UpdateParcelTemplateInput) => request<update_parcel_template>(
      gqlstr(UPDATE_PARCEL_TEMPLATE), { data, ...headers() }
    ),
    { onSuccess: invalidateCache, onError }
  );
  const deleteParcelTemplate = useMutation(
    (data: { id: string }) => request<delete_template>(
      gqlstr(DELETE_TEMPLATE), { data, ...headers() }
    ),
    { onSuccess: invalidateCache, onError }
  );

  return {
    createParcelTemplate,
    updateParcelTemplate,
    deleteParcelTemplate,
  };
}