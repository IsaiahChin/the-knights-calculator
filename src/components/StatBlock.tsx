import Image, { StaticImageData } from 'next/image';

interface Stats {
  children?: any;
  icon?: StaticImageData;
  iconAlt?: string;
  value: String | number;
  valueSize: String;
  subValue: String;
}

const StatBlock: React.FC<Stats> = ({
  children,
  icon,
  iconAlt,
  value,
  valueSize,
  subValue,
}) => {
  return (
    <span className="stat flex items-center gap-2">
      {icon != undefined && iconAlt != undefined && (
        <Image src={icon} alt={iconAlt} className="max-w-[55px]" />
      )}
      <div>
        {children}
        {valueSize == 'large' && (
          <h1>
            {value}
            <span className="uppercase text-xs"> {subValue}</span>
          </h1>
        )}
        {valueSize == 'medium' && (
          <h3>
            {value}
            <span className="uppercase text-xs"> {subValue}</span>
          </h3>
        )}
      </div>
    </span>
  );
};

export default StatBlock;
