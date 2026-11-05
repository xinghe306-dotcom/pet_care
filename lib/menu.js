export const menus = {
  dog: {
    prices: [99, 199, 259],
    descriptions: [
      "温水沐浴、柔和吹干，搭配耳部清洁和指甲修剪，让日常清洁也有仪式感。",
      "基础洗护加全身造型，根据毛发特点与生活习惯，找到属于它的可爱模样。",
      "从基础洗护开始，增加毛发滋养与细致梳理，给毛孩子一段松弛的小假期。",
    ],
    photos: [
      "photo-1516734212186-a967f81ad0d7",
      "photo-1583337130417-3346a1be7dee",
      "photo-1548199973-03cce0bbc87b",
    ],
  },
  cat: {
    prices: [159, 229, 299],
    descriptions: [
      "猫咪专属时段，温柔沐浴与细致吹干，搭配耳部清洁、梳毛与指甲修剪。",
      "基础洗护搭配局部卫生修剪，根据毛发与皮肤状态评估，不默认全身剃毛。",
      "基础洗护搭配浮毛梳理与毛发滋养，多一点耐心，让毛茸茸更柔软自在。",
    ],
    photos: [
      "photo-1573865526739-10659fec78a5",
      "photo-1514888286974-6c03e2ca1dba",
      "photo-1513360371669-4adf3dd7dff8",
    ],
  },
};
export const photoUrl = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`;
