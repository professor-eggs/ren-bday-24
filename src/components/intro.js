/**
 * Renée's Birthday Party Invitation
 * Adapted from Gatsby's useStaticQuery Bio component
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import ReactPlayer from "react-player"

const Intro = ({ showTOC = true }) => {
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
      allMarkdownRemark(sort: { frontmatter: { title: ASC } }) {
        nodes {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  const birthday = data.site.siteMetadata?.birthday
  const posts = data.allMarkdownRemark.nodes

  return (
    <div className="birthday-party">
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

      {/* Embed a video */}
      {showTOC && (
        <div className="intro-video">
          <h2>Watch the Invitation Video</h2>
          <ReactPlayer
            url="/videos/party-intro.mp4"
            width="100%"
            height="100%"
            controls
            style={{ maxWidth: "300px", margin: "0 auto" }}
          />
        </div>
      )}

      {/* Render TOC only if showTOC is true */}
      {showTOC && (
        <div className="toc">
          <h2>Table of Contents</h2>
          <ul>
            {posts.map(post => (
              <li key={post.fields.slug}>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Intro
