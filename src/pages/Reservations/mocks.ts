export const reservations = {
  data: [
    {
      serverId: 35,
      customerId: 464,
      status: 'CREATED',
      reservedAt: '2024-07-14T09:00:00',
      requirements: '',
      products: [
        {
          group: '엔진오일 교체',
          name: '쉘 힐릭스 울트라 5W-40',
          price: 105000,
          quantity: 1,
        },
        {
          group: '배터리 교체',
          name: '델코 AGM70L',
          price: 190000,
          quantity: 1,
        },
        {
          group: '와이퍼 교체',
          name: 'PIAA 실리콘 와이퍼 600mm',
          price: 40000,
          quantity: 1,
        },
      ],
      paymentMethod: 'VBANK',
    },
  ],
  totalPages: 9,
  hasPrevious: false,
  hasNext: true,
};

export const reservationDetail = {
  serverId: 1,
  status: 'CREATED',
  reservedAt: '2024-07-14T09:00:00',
  requirements: '꼼꼼하게 봐주세용!!',
  customer: {
    serverId: 2,
    name: '김철수',
    phone: '01033334444',
  },
  vehicle: {
    brand: '기아',
    model: '올 뉴 카니발',
    number: '123어5505',
    fuelType: 'DIESEL',
  },
  products: [
    {
      group: '브레이크오일 교체',
      name: '액트루브 SUPER DOT4',
      price: 261000,
      quantity: 1,
    },
  ],
  paymentMethod: 'VBANK',
};

export const customer = {
  serverId: 1,
  name: '홍길동',
  phone: '01011112222',
  vehicle: {
    brand: '제네시스',
    model: '제네시스 GV80',
    number: '123모8199',
    fuelType: 'PREMIUM_GASOLINE',
  },
  visitCount: 1,
};
