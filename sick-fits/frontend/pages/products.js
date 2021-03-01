import Pagination from '../components/Pagination';
import Products from '../components/Products';

export default function ProductPage() {
  return (
    <div>
      <Pagination page={7} />
      <Products />
      <Pagination page={7} />
    </div>
  );
}
