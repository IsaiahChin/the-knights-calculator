import Image from 'next/image';
import selectionBorder from '@/assets/ui/selection-corner.png';

export default function SelectionBorder({ target }: { target: String }) {
  let classList = '';

  if (target == 'nail') {
    classList = 'inset-[-35px]';
  } else if (target == 'spell') {
    classList = 'inset-[-50px_-30px] mb-2';
  }

  return (
    <div className={`absolute z-10 ${classList}`}>
      <Image
        className="selection-corner top-0 left-0"
        src={selectionBorder}
        alt=""
      ></Image>
      <Image
        className="selection-corner top-0 right-0 rotate-90"
        src={selectionBorder}
        alt=""
      ></Image>
      <Image
        className="selection-corner bottom-0 right-0 rotate-180"
        src={selectionBorder}
        alt=""
      ></Image>
      <Image
        className="selection-corner bottom-0 left-0 -rotate-90"
        src={selectionBorder}
        alt=""
      ></Image>
    </div>
  );
}
