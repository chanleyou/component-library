import React, { useState, useRef, useEffect } from 'react'
import './Dropdown.css'

type Props = {
  value: string
  options: string[]
  changeHandler: Function
  placeholder?: string
}

const Dropdown = ({ value, options, changeHandler, placeholder }: Props) => {
  const hasValue = () => value.length > 0

  const valueIndex = () => {
    if (!hasValue()) return -1
    return filteredOptions().indexOf(value)
  }

  const inputElement = useRef<HTMLInputElement>(null)

  const [input, setInput] = useState(value)

  const controls = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { keyCode } = e
    switch (keyCode) {
      case 38: // up
        if (valueIndex() > 0) {
          changeHandler(filteredOptions()[valueIndex() - 1])
        }
        break
      case 40: // down
        if (valueIndex() < filteredOptions().length - 1)
          changeHandler(filteredOptions()[valueIndex() + 1])
        break
      case 27: // esc
      case 13: // enter
        if (inputElement.current) inputElement.current.blur()
    }
  }

  const focusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    setInput('')
  }
  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (filteredOptions().length > 0 && !filteredOptions().includes(value)) {
      changeHandler(filteredOptions()[0])
    }
  }

  const filteredOptions = () => {
    return options.filter(n => {
      for (let i = 0; i < input.length; i++) {
        if (input[i].toUpperCase() !== n[i].toUpperCase()) return false
      }
      return true
    })
  }

  useEffect(() => {
    const element = document.querySelector<HTMLElement>('.selected.item')

    if (element == null) return
    if (element.offsetParent == null) return
    let parent = element.offsetParent as HTMLElement

    if (element.offsetTop > parent.scrollTop + parent.offsetHeight) {
      element.scrollIntoView()
    } else if (element.offsetTop < parent.scrollTop) {
      element.scrollIntoView()
    }
  }, [value])

  return (
    <div className="dropdown">
      <input
        ref={inputElement}
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder={hasValue() ? value : placeholder}
        onFocus={focusHandler}
        onBlur={blurHandler}
        onKeyDown={controls}
      />
      <div className={hasValue() ? 'value' : 'value placeholder'}>
        {hasValue() ? value : placeholder}
      </div>
      <div className="options">
        {filteredOptions().map((op, i) => (
          <div
            key={op}
            className={
              value === op
                ? 'selected item'
                : !filteredOptions().includes(value) && i === 0
                ? 'item pseudohover'
                : 'item'
            }
            onClick={() => {
              changeHandler(op)
            }}
          >
            {op}
          </div>
        ))}
        {filteredOptions().length === 0 && (
          <div className="no item">No results found.</div>
        )}
      </div>
    </div>
  )
}

export default Dropdown
