import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { useIntl } from 'services'
import { Input, TagPicker } from 'components'

import { useConfiguration } from 'contexts'

import './Searchbar.css'

// TMP_TAGS

const Searchbar = ({ text, tags, loading, onTextChange, onTagsChange }) => {
  const intl = useIntl(Searchbar)
  const conf = useConfiguration()

  const tagLabels = tags
    .map(tag =>
      conf.tagCategories
        .reduce((acc, cat) => acc.concat(cat.labels), [])
        .find(label => label.name === tag)
    )
    .filter(l => l)

  return (
    <div className="searchbar">
      <Input
        icon={
          <>
            <span
              className={cn('icon', { hidden: loading && text !== '' })}
              onClick={() => this.input.focus()}
            >
              <i className="material-icons">search</i>
            </span>
            <span className={cn('icon', { hidden: !(loading && text !== '') })}>
              <i className="fas fa-spinner fa-pulse" />
            </span>
          </>
        }
        value={text}
        onChange={e => onTextChange(e.target.value)}
        onClear={() => onTextChange('')}
      />
      <div className="filters">
        <TagPicker
          label={intl('filter.tags')}
          icon="local_offer"
          tags={tagLabels}
          onChange={onTagsChange}
        />
      </div>
    </div>
  )
}

Searchbar.propTypes = {
  text: PropTypes.string,
  tags: PropTypes.array,
  loading: PropTypes.bool,
  onTextChange: PropTypes.func,
  onTagsChange: PropTypes.func
}

Searchbar.translations = {
  en: {
    filter: {
      tags: 'Filter by tags:'
    }
  },
  fr: {
    filter: {
      tags: 'Filter par tags:'
    }
  }
}

export default Searchbar
