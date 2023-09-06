import Image, { StaticImageData } from 'next/image';

interface Stats {
  title?: any;
  icon?: StaticImageData;
  iconAlt?: string;
  value: any;
  valueSize?: String;
  subValue?: String;
}

const StatBlock: React.FC<Stats> = ({
  title,
  icon,
  iconAlt,
  value,
  valueSize,
  subValue,
}) => {
  return (
    <span className="stat flex items-center gap-2">
      {icon != undefined && iconAlt != undefined && (
        <Image
          src={icon}
          alt={iconAlt}
          className="max-w-[40px] sm:max-w-[55px]"
        />
      )}
      <div>
        <p className="w-max">{title}</p>
        {valueSize == 'h3' ? (
          <h3 className="flex flex-nowrap items-baseline gap-1">
            {value}
            <span className="uppercase text-xs text-zinc-300/80 font-medium">
              {subValue}
            </span>
          </h3>
        ) : (
          <h2 className="flex flex-nowrap items-baseline gap-1">
            {value}
            <span className="uppercase text-xs text-zinc-300/80 font-medium">
              {subValue}
            </span>
          </h2>
        )}
      </div>
    </span>
  );
};

export default StatBlock;
