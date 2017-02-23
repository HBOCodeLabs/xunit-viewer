import React, {PropTypes} from 'react'

let Count = ({icon, name, total, type, category, onStatToggle}) => {
  category = name || category
  return <li className={`toggle is-${type}`}>
    <a
      className='count'
      onClick={() => {
        onStatToggle({name: category, type})
      }}>
      <span className='icon is-small'><i className={`fa fa-${icon}`} /></span>
      <span>{name} <b>{total}</b></span>
    </a>
  </li>
}

Count.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  total: PropTypes.number,
  type: PropTypes.string,
  onStatToggle: PropTypes.func.isRequired,
  statsStatus: PropTypes.object
}

let Options = ({name, type, category, onStatToggle}) => {
  category = name || category
  return <li className={`toggle is-${type}`}>
    <a
      title='cancel'
      className='change'
      onClick={() => {
        onStatToggle({name: category, type})
      }}>
      <span className='icon is-small'><i className={`fa fa-chevron-left`} /></span>
    </a>
    <a
      title='exapnd'
      className='change'
      onClick={() => {
      }}>
      <span className='icon is-small'><i className={`fa fa-expand`} /></span>
    </a>
    <a
      title='contract'
      className='change'
      onClick={() => {
      }}>
      <span className='icon is-small'><i className={`fa fa-compress`} /></span>
    </a>
    <a
      title='show'
      className='change'
      onClick={() => {
      }}>
      <span className='icon is-small'><i className={`fa fa-eye`} /></span>
    </a>
    <a
      title='hide'
      className='change'
      onClick={() => {
      }}>
      <span className='icon is-small'><i className={`fa fa-eye-slash`} /></span>
    </a>
  </li>
}

Options.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  onStatToggle: PropTypes.func.isRequired,
  statsStatus: PropTypes.object
}

let Toggle = ({icon, name, total, type, category, onStatToggle, statsStatus}) => {
  let Content = Count
  category = name || category
  if (statsStatus && statsStatus[category] && statsStatus[category][type]) {
    Content = Options
  }

  return <Content
    icon={icon}
    name={name}
    total={total}
    type={type}
    category={category}
    onStatToggle={onStatToggle}
    />
}

Toggle.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  total: PropTypes.number,
  type: PropTypes.string,
  onStatToggle: PropTypes.func.isRequired,
  statsStatus: PropTypes.object
}

let Stat = ({icon, name, total, type, data = [], onSearch, onStatToggle, statsStatus}) => {
  return <div className='subtitle'>
    <div className='tabs is-toggle'>
      <ul>
        <li>
          <p className='control has-icon has-icon-right'>
            <input
              className='input'
              type='text'
              placeholder={`Search ${name}`}
              onChange={evt => {
                onSearch(evt.target.value, type)
              }} />
            <span className='icon is-small'>
              <i className='fa fa-search' />
            </span>
          </p>
        </li>
        <Toggle
          onStatToggle={onStatToggle}
          icon={icon}
          name={name}
          total={total}
          type={type}
          statsStatus={statsStatus} />
        {
          data.map((toggle, index) => {
            return <Toggle
              onStatToggle={onStatToggle}
              key={`toggle-${type}-${index}`}
              icon={toggle.icon}
              category={name}
              name={toggle.name}
              total={toggle.total}
              active={toggle.active}
              type={toggle.type}
              statsStatus={statsStatus} />
          })
        }
      </ul>
    </div>
  </div>
}

Stat.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  total: PropTypes.number,
  data: PropTypes.array,
  type: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  onStatToggle: PropTypes.func.isRequired,
  statsStatus: PropTypes.object
}

export default Stat
