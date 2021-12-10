import { v4 as uuidv4 } from 'uuid';

import MaraImg from '../images/Pmara.png';
import LuckyImg from '../images/lucky.png';
import Abogados from '../images/abogadosrys.png';
import Apaclla from '../images/apaclla.png';
import GRC from '../images/grc.png';
import MJV from '../images/mjv.png';



const projects = [
  {
    id: uuidv4(),
    name: 'CM Mara EIRL',
    desc:
      'Un aplicativo movil para el registro de citas medicas en el centro medico Mara.',
    img: MaraImg,
  },
  {
    id: uuidv4(),
    name: 'S&R Asociados',
    desc:
      'Desarrollo de una web unica para un Estudio Juridico utilizando Javascript - Material UI',
    img: Abogados,
  },
  {
    id: uuidv4(),
    name: 'GRC ADVISORS',
    desc:
      'Desarrollo de una web unica para una empresa de Consultoria utilizando Javascript - Bootstrap v5',
    img: GRC,
  },
  {
    id: uuidv4(),
    name: 'APACLLA & ASOCIADOS',
    desc:
      'Desarrollo de una web unica para una empresa que brinda servicios de Auditoria, Contabilidad, etc.',
    img: Apaclla,
  },
  {
    id: uuidv4(),
    name: 'MJV Business Improvement',
    desc:
      'Desarrollo de una web unica para una empresa especializada en servicios de Marketing Digital',
    img: MJV,
  },
  {
    id: uuidv4(),
    name: 'Confecciones Lucky',
    desc:
      'Desarrollo de un sistema web-movil para el Control de Inventario en la empresa Confecciones Lucky',
    img: LuckyImg,
  },
];

export default projects;
