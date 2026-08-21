import { accounts } from '../data/wedding'

type AccountGroup = (typeof accounts)[keyof typeof accounts]

function AccountList({ items }: { items: AccountGroup }) {
  return (
    <div className="account-list">
      {items.map((account) => (
        <div className="account-list__item" key={`${account.relation}-${account.name}`}>
          <p>
            <span>{account.relation}</span>
            <strong>{account.name}</strong>
          </p>
          <p className="account-list__number">
            <span>{account.bank}</span>
            <span>{account.number}</span>
          </p>
          <button type="button" disabled title="계좌번호 입력 후 사용할 수 있습니다">
            복사
          </button>
        </div>
      ))}
    </div>
  )
}

export function Accounts() {
  return (
    <section className="accounts-section" aria-labelledby="accounts-title">
      <p className="section-kicker">With Your Heart</p>
      <h2 id="accounts-title">마음 전하실 곳</h2>
      <p className="accounts-section__description">
        참석이 어려우신 분들을 위해 계좌번호를 안내드립니다.
      </p>

      <div className="account-groups">
        <details>
          <summary>신랑측 계좌번호</summary>
          <AccountList items={accounts.groom} />
        </details>
        <details>
          <summary>신부측 계좌번호</summary>
          <AccountList items={accounts.bride} />
        </details>
      </div>
    </section>
  )
}
