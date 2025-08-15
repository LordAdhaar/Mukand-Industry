import React from 'react';

const AssistanceSection = ({
  tag,
  title,
  description,
  stat1Value,
  stat1Description,
  stat2Value,
  stat2Description,
  imageUrl,
  imagePosition = 'left',
  padding = 'py-10'
}) => {
  const imageElement = <img className="flex-1 h-[640px] rounded-2xl" src={imageUrl} alt={title} />;
  const textElement = (
    <div className="flex-1 inline-flex flex-col justify-start items-start gap-8">
      <div className="self-stretch flex flex-col justify-start items-start gap-8">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="inline-flex justify-start items-center">
            <div className="justify-start text-slate-950 text-base font-semibold font-['Archivo'] leading-normal">{tag}</div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch text-slate-950 text-5xl font-bold font-['Space_Grotesk'] leading-[57.60px]">{title}</div>
            <div className="self-stretch text-slate-950 text-lg font-normal font-['Source_Sans_3'] leading-relaxed">{description}</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="self-stretch py-2 inline-flex justify-start items-start gap-6">
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
              <div className="self-stretch text-slate-950 text-5xl font-bold font-['Space_Grotesk'] leading-[57.60px]">{stat1Value}</div>
              <div className="self-stretch text-slate-950 text-base font-normal font-['Source_Sans_3'] leading-normal">{stat1Description}</div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
              <div className="self-stretch text-slate-950 text-5xl font-bold font-['Space_Grotesk'] leading-[57.60px]">{stat2Value}</div>
              <div className="self-stretch text-slate-950 text-base font-normal font-['Source_Sans_3'] leading-normal">{stat2Description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`self-stretch px-20 ${padding} bg-white inline-flex flex-col justify-start items-center gap-20 overflow-hidden`}>
      <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-20">
        <div className="self-stretch inline-flex justify-start items-center gap-20">
          {imagePosition === 'left' ? imageElement : textElement}
          {imagePosition === 'left' ? textElement : imageElement}
        </div>
      </div>
    </div>
  );
};

export default AssistanceSection;
