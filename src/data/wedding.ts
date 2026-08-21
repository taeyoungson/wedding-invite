import coverMain from '../assets/photos/cover-main.jpeg'
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

export const wedding = {
  groom: '손태영',
  bride: '조현아',
  families: {
    groom: {
      father: '손철호',
      mother: '임성효',
      relation: '장남',
    },
    bride: {
      father: '조양호',
      mother: '윤필란',
      relation: '차녀',
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
  coverImage: coverMain,
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
].map((src, index) => ({
  src,
  alt: `태영과 현아의 웨딩 사진 ${index + 1}`,
}))

export const accounts = {
  groom: [
    { relation: '신랑', name: '손태영', bank: '은행 추후 입력', number: '계좌번호 추후 입력' },
    { relation: '아버지', name: '손철호', bank: '은행 추후 입력', number: '계좌번호 추후 입력' },
    { relation: '어머니', name: '임성효', bank: '은행 추후 입력', number: '계좌번호 추후 입력' },
  ],
  bride: [
    { relation: '신부', name: '조현아', bank: '은행 추후 입력', number: '계좌번호 추후 입력' },
    { relation: '아버지', name: '조양호', bank: '은행 추후 입력', number: '계좌번호 추후 입력' },
    { relation: '어머니', name: '윤필란', bank: '은행 추후 입력', number: '계좌번호 추후 입력' },
  ],
} as const
