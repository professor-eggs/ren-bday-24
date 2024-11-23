/**
 * Renee's Birthday Party Invitation
 * Adapted from Gatsby's useStaticQuery Bio component
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Intro = () => {
  const data = useStaticQuery(graphql`
    query PartyQuery {
      site {
        siteMetadata {
          birthday {
            host
            theme
            cookbook
            date
            time
            location
          }
        }
      }
    }
  `)

  // Set these values by editing "birthday" in gatsby-config.js
  const birthday = data.site.siteMetadata?.birthday

  return (
    <div className="birthday-party">
      <StaticImage
        className="party-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/party-logo.png"
        width={50}
        height={50}
        quality={95}
        alt="Party logo"
      />
      {birthday?.host && (
        <div>
          <h1>You're Invited!</h1>
          <p>
            Join us for a special celebration:{" "}
            <strong>{birthday.host}'s Birthday Party!</strong>
          </p>
          <p>
            🎉 <strong>Theme:</strong> {birthday.theme} <br />
            📖 <strong>Cookbook:</strong> {birthday.cookbook} <br />
            📅 <strong>Date:</strong> {birthday.date} <br />
            🕒 <strong>Time:</strong> {birthday.time} <br />
            📍 <strong>Location:</strong> {birthday.location}
          </p>
          <p>
            Each attendee (or couple) will cook a meal from the cookbook:{" "}
            <em>{birthday.cookbook}</em> by Ainsley Harriott. Let's create a
            Caribbean feast together!
          </p>
          <p>We can't wait to see you there!</p>
        </div>
      )}
    </div>
  )
}

export default Intro
