import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>

      <ul>
        <li>
          <NavLink to="lazy1">Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy 3</NavLink>
        </li>

        <Routes>
          <Route path="lazy1" element={<LazyPage1 />} />
          <Route path="lazy2" element={<LazyPage2 />} />
          <Route path="lazy3" element={<LazyPage3 />} />

          {/* * Si no existe el path, tendríamos 2 opciones: */}

          {/* * Opción 1: Redirigir a otro componente, por ejemplo <NotFoundPage /> */}
          <Route path="*" element={<div>Not found</div>} />

          {/* * Opción 2: Redirigir a alguna de las rutas de arriba  */}
          <Route path="*" element={<Navigate replace to="lazy1" />} />
        </Routes>
      </ul>
    </div>
  );
};

export default LazyLayout;
