import css from './SidebarNotes.module.css'
import Link from 'next/link';

function SidebarNotes() {
  return (
    <ul className={css.menuList}>
      {/* список тегів */}
      <li className={css.menuItem}>
        <Link href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </Link>
      </li>
      <li className={css.menuItem}>
        <Link
          href={`/notes/filter/Todo`}
          className={css.menuLink}
        >
          Todo
        </Link>
      </li>
    </ul>
  );
}

export default SidebarNotes;