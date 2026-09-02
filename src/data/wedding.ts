import gallery01 from '../assets/photos/g1.jpg'
import gallery02 from '../assets/photos/g2.jpg'
import gallery03 from '../assets/photos/g3.jpg'
import gallery04 from '../assets/photos/g4.jpg'
import gallery05 from '../assets/photos/g5.jpg'
import gallery06 from '../assets/photos/g6.jpg'
import gallery07 from '../assets/photos/g7.jpg'
import gallery08 from '../assets/photos/g8.jpg'
import gallery09 from '../assets/photos/g9.jpg'
import gallery10 from '../assets/photos/g10.jpg'
import gallery11 from '../assets/photos/g11.jpg'
import gallery12 from '../assets/photos/g12.jpg'
import gallery13 from '../assets/photos/g13.jpg'
import gallery14 from '../assets/photos/g14.jpg'
import gallery16 from '../assets/photos/g16.jpg'
import gallery17 from '../assets/photos/g17.jpg'
import gallery18 from '../assets/photos/g18.jpg'
import gallery19 from '../assets/photos/g19.jpg'
import gallery20 from '../assets/photos/g20.jpg'
import gallery21 from '../assets/photos/g21.jpg'
import gallery22 from '../assets/photos/g22.jpg'
import gallery23 from '../assets/photos/g23.jpg'
import gallery24 from '../assets/photos/g24.jpg'
import gallery25 from '../assets/photos/g25.jpg'

export const wedding = {
  groom: '손태영',
  bride: '조현아',
  families: {
    groom: {
      father: '손철호',
      mother: '임성효',
      relation: '아들',
    },
    bride: {
      father: '조양호',
      mother: '윤필란',
      relation: '딸',
    },
  },
  dateLabel: '2026년 10월 17일 토요일',
  timeLabel: '낮 12시',
  ceremonyDate: {
    year: 2026,
    month: 10,
    day: 17,
  },
  venue: '근화원',
  location: {
    address: '서울 광진구 광나루로 441 (능동 18-11)',
    parking: '능동어린이회관 정문 주차장 이용',
    subway: '7호선 어린이대공원역 2번 출구에서 도보 약 7분',
    buses: [
      '어린이회관앞: 일반 119 · 지선 3216 · 간선 302',
      '어린이대공원앞 세종대학교역: 지선 3216, 4212 · 간선 721, N61, N62',
      '공항버스: 세종대학교 6013',
    ],
    naverMapUrl: 'https://naver.me/FZ2x56vx',
  },
  coverImage: gallery01,
} as const

export const invitationMessage = [
  '유난히 특별한 것 없던 일상도',
  '함께하면 매 순간이 선물 같았습니다.',
  '서로의 하루를 가장 먼저 떠올리는 사람이 되어',
  '평생을 함께하려 합니다.',
  '그 첫걸음에 소중한 여러분을 초대합니다.',
] as const

export const galleryPhotos = [
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  gallery05,
  gallery06,
  gallery07,
  gallery08,
  gallery09,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery22,
  gallery23,
  gallery24,
  gallery25,
].map((src, index) => ({
  src,
  alt: `태영과 현아의 웨딩 사진 ${index + 1}`,
}))

export const accounts = {
  groom: [
    { relation: '신랑', name: '손태영', bank: '우리은행', number: '1002-454-215893' },
    {
      relation: '부모님',
      name: '손철호 · 임성효',
      bank: '국민은행',
      number: '832-24-0139-441',
    },
  ],
  bride: [
    { relation: '신부', name: '조현아', bank: '신한은행', number: '110-497-717473' },
    { relation: '아버지', name: '조양호', bank: '우리은행', number: '178-120674-02-001' },
    { relation: '어머니', name: '윤필란', bank: '농협은행', number: '827-02-210318' },
  ],
} as const
