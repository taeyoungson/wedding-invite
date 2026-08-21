import { invitationMessage, wedding } from '../data/wedding'

export function Invitation() {
  const { groom, bride, families } = wedding

  return (
    <section className="invitation" aria-labelledby="invitation-title">
      <p className="section-kicker">Invitation</p>
      <h2 id="invitation-title">소중한 분들을 초대합니다</h2>

      <div className="invitation__message">
        {invitationMessage.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div className="invitation__families" aria-label="양가 가족 소개">
        <p>
          <span className="invitation__parents">
            {families.groom.father} · {families.groom.mother}
          </span>
          <span className="invitation__relation">의 {families.groom.relation}</span>
          <strong>{groom}</strong>
        </p>
        <p>
          <span className="invitation__parents">
            {families.bride.father} · {families.bride.mother}
          </span>
          <span className="invitation__relation">의 {families.bride.relation}</span>
          <strong>{bride}</strong>
        </p>
      </div>
    </section>
  )
}
