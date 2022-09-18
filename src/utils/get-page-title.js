import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Marketing System'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
