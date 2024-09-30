const MenuItems = () => {
  const menuItems = [
    { id: 1, title: "Personal Training" },
    { id: 2, title: "Group Classes" },
    { id: 3, title: "Nutrition Plans" },
    { id: 4, title: "Yoga & Pilates" },
    { id: 5, title: "Strength Training" },
    { id: 6, title: "Cardio Workouts" },
    { id: 7, title: "Wellness Programs" },
  ];

  return (
    <ul className="navbar-nav">
      {menuItems.map((item) => (
        <li className="nav-item" key={item.id}>
          <a className="nav-link" href="#" role="button">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
