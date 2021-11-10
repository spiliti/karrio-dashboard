import React, { useContext } from 'react';
import Image from 'next/image';
import getConfig from 'next/config';
import { APIReference } from '@/context/references-provider';


const Footer: React.FC = () => {
  const { publicRuntimeConfig } = getConfig();
  const { app_website, app_name } = useContext(APIReference);

  return (
    <footer className="footer py-6">
      <div className="content columns">
        <div className="column"></div>
        <div className="column has-text-centered">
          <a href={app_website}>
            <Image src="/icon.svg" width="70" height="100%" alt={app_name} />
          </a>
        </div>
        <div className="column has-text-right-desktop">
          <a className="button is-white footer-api-reference-link" target="_blank" rel="noreferrer" href={`${publicRuntimeConfig?.PURPLSHIP_API_URL}`}>
            <span>API Reference</span>
            <span className="icon is-small">
              <i className="fas fa-external-link-alt"></i>
            </span>
          </a>
          <a className="button is-white footer-api-reference-link" target="_blank" rel="noreferrer" href={`${publicRuntimeConfig?.PURPLSHIP_API_URL}/graphql`}>
            <span>GraphQL</span>
            <span className="icon is-small">
              <i className="fas fa-external-link-alt"></i>
            </span>
          </a>
          <a className="button is-white footer-docs-link" target="_blank" rel="noreferrer" href="https://docs.purplship.com">
            <span>Docs</span>
            <span className="icon is-small">
              <i className="fas fa-external-link-alt"></i>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;