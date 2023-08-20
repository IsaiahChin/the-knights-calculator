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
  valueSize = 'medium',
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
        <h4 className="w-max">{title}</h4>
        {valueSize == 'large' && (
          <h2 className="flex flex-nowrap items-baseline gap-1">
            {value}
            <span className="uppercase text-xs"> {subValue}</span>
          </h2>
        )}
        {valueSize == 'medium' && (
          <h3 className="flex flex-nowrap items-baseline gap-1">
            {value}
            <span className="uppercase text-xs"> {subValue}</span>
          </h3>
        )}
        {valueSize == 'small' && (
          <p className="font-bold gap-1">
            {value}
            <span className="uppercase text-xs"> {subValue}</span>
          </p>
        )}
      </div>
    </span>
  );
};

export default StatBlock;
