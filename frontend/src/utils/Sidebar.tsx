import { Board, Income, Order, Product, Settings } from "@/images";

const id = JSON.parse(localStorage.getItem("id") as string);
export const data = [
  {
    icon: <Board />,
    name: "Хяналтын самбар",
    slug: `/admin/dashboard/${id}`,
  },
  {
    icon: <Order />,
    name: "Захиалга",
    slug: "/admin/order",
  },
  {
    icon: <Income />,
    name: "Орлого",
    slug: "/admin/income",
  },
  {
    icon: <Product />,
    name: "Бүтээгдэхүүн",
    slug: "/admin/product",
  },
  {
    icon: <Settings />,
    name: "Тохиргоо",
    slug: "/admin/settings",
  },
];
