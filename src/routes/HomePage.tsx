import HeroPage from './hero/HeroPage'
import AboutPage from './about/AboutPage'
import StatsPage from './stats/StatsPage'
import PortfolioPage from './portfolio/PortfolioPage'
import TeamPage from './team/TeamPage'
import ReviewPage from './review/ReviewPage'
import NewsPage from './news/NewsPage'
import EndPage from './end/EndPage'
import FooterPage from './footer/FooterPage'

function HomePage() {
  return (
    <>
      <HeroPage/>
      <AboutPage/>
      <StatsPage/>
      <PortfolioPage/>
      <TeamPage/>
      <ReviewPage/>
      <NewsPage/>
      <EndPage/>
      <FooterPage/>
    </>
  )
}
export default HomePage