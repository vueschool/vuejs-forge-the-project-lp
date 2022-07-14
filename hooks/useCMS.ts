import { landingPageData } from '~~/static/data';

export const useCMS = () => {
  return landingPageData;
}

export const useFeatureSection = () => useCMS().fields.body.find(item => item.type === 'features')

export const useFeatures = () => useFeatureSection().fields.features || []

export const useFeatureSectionInfo = () => {
  const featureSection = useFeatureSection();

  return {
    title: featureSection.fields.section_name,
    subheadline: featureSection.fields.headline,
    description: featureSection.fields.subheadline,
  }
}

export const useHero = () => {
  const heroSection = useCMS().fields.body.find(item => item.type === 'hero');

  return {
    slug: heroSection.slug,
    ...heroSection.fields,
  }
}

export const useMenuItems = () => useCMS().fields.navMenu.linkItems

export const useActionItems = () => useCMS().fields.navMenu.actionItems

export const useLogo = () => useCMS().fields.navMenu.logo