import EnemyTable from './EnemyTable';
import Separator from '../Separator';

export default function EnemyContainer() {
  return (
    <section className="w-full md:w-3/12 h-5/6 md:h-auto">
      <h1 id="enemies" className="w-full scroll-m-24">
        Enemies
      </h1>
      <Separator />
      <EnemyTable />
    </section>
  );
}
