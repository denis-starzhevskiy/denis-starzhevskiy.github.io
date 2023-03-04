import React, { useLayoutEffect, useState } from 'react';
import s from './Accordion.module.scss';
import expandDownIcon from '../../../public/images/expandDownIcon.svg';
import Image from 'next/image';

type AccordionProps = {
  title: React.ReactNode;
  content: React.ReactNode;
  open?: boolean;
};

const Accordion: React.FC<AccordionProps> = ({ title, content, open: openProp = true }) => {
  const [open, setOpen] = useState(openProp);

  useLayoutEffect(() => {
    setOpen(openProp);
  }, [openProp]);

  return (
    <div>
      <div className={s.accordionTitle} onClick={() => setOpen(!open)}>
        <div>{title}</div>
        <Image
          style={{ transform: !open ? 'rotate(180deg)' : '' }}
          src={expandDownIcon}
          alt={'expandDownIcon'}
        />
      </div>
      {open && <div className={s.accordionContent}>{content}</div>}
    </div>
  );
};
export default Accordion;