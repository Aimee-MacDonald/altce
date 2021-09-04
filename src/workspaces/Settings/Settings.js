import React, { useContext } from 'react'
import styled from 'styled-components'

import { SettingsContext } from '../../util/Settings'

const Settings = () => {
  const settings = useContext(SettingsContext)
  const { theme, setTheme } = settings.theme

  const saveTheme = e => {
    e.preventDefault()

    const newSettings = {
      ...settings,
      theme: theme
    }

    localStorage.setItem('settings', JSON.stringify(newSettings))
  }

  return (
    <StyledSettings onSubmit={saveTheme}>
      <div>
        <label>Background</label>
        <input
          onChange={e => setTheme(() => ({
            ...theme,
            background: e.target.value
          }))}
          type='color'
          value={theme.background}
        />
      </div>

      <div>
        <label>Navs</label>
        <input
          onChange={e => setTheme(() => ({
            ...theme,
            navs: e.target.value
          }))}
          type='color'
          value={theme.navs}
        />
      </div>

      <div>
        <label>Selected</label>
        <input
          onChange={e => setTheme(() => ({
            ...theme,
            selected: e.target.value
          }))}
          type='color'
          value={theme.selected}
        />
      </div>

      <div>
        <label>Unselected</label>
        <input
          onChange={e => setTheme(() => ({
            ...theme,
            unselected: e.target.value
          }))}
          type='color'
          value={theme.unselected}
        />
      </div>

      <div>
        <label>Positive Affirmation</label>
        <input
          onChange={e => setTheme(() => ({
            ...theme,
            positive_affirmation: e.target.value
          }))}
          type='color'
          value={theme.positive_affirmation}
        />
      </div>

      <div>
        <label>Negative Affirmation</label>
        <input
          onChange={e => setTheme(() => ({
            ...theme,
            negative_affirmation: e.target.value
          }))}
          type='color'
          value={theme.negative_affirmation}
        />
      </div>

      <button type='submit'>Save</button>
    </StyledSettings>
  )
}

const StyledSettings = styled.form`
  display: flex;
  flex-flow: nowrap column;
`

export default Settings