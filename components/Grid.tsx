import { gridItems } from '@/data';
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid';

function Grid() {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item, i) => {
          console.log(item);
          return <BentoGridItem key={i} {...item} />;
        })}
      </BentoGrid>
    </section>
  );
}

export default Grid;
