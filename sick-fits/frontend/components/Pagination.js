import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import PaginationStyles from './styles/PaginationStyles';
import { perPage } from '../config'

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allProductsMeta{
      count
    }
  }
`;

export default function Pagination({ page }) {
  const { error, loading, data} = useQuery(PAGINATION_QUERY);
  if (loading) return null;
  if (error) return <DisplayError error={error}></DisplayError>
  const {count} = data._allProductsMeta
  const pageCount = count / perPage;
  return (
    <PaginationStyles>
      <Head>
        <title>Sick Fits - Page {page} of ______</title>
      </Head>
      <Link href={`/products/${page-1}`}>
        <a aria-disabled={page <= 1}>← Prev</a>
      </Link>
      <p>Page {page} of {Math.ceil(pageCount)} </p>
      <p>{count} Items total</p>
      <Link href={`/products/${page+1}`}>
        <a aria-disabled={page >= pageCount}>Next →</a>
      </Link>
    </PaginationStyles>
  );
}
