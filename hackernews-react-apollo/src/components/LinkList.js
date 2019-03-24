import React, { Component } from 'react'
import Link from './Link'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


const FEED_QUERY = gql`{
    feed{
      links{
        id,
        url,
        createdAt,
        description
      }
      
    }
  }`

class LinkList extends Component {
    render() {
        return (
            <Query query={FEED_QUERY} >
                {({error, loading, data}) => {
                    if(loading) return <h3>LOADING...</h3>;
                    if(error) return <h1>ERROR</h1>;
                    const linksToRender = data.feed.links ;
                    return <div>{linksToRender.map(link => <Link key={link.id} link={link} />)}</div>
                }

                }
            </Query>
        )
    }
}

export default LinkList