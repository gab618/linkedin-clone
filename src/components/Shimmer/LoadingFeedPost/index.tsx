import React from "react";

import { Container } from "./styles";
import Panel from "../../Panel";
import Skeleton from "../../Skeleton";

const LoadingFeedPost: React.FC = () => {
  return (
    <Container>
      <Panel className="no-shadow">
        <header>
          <Skeleton className="avatar-skeleton"></Skeleton>
          <div className="column">
            <Skeleton className="row-skeleton"></Skeleton>
            <Skeleton className="row-skeleton"></Skeleton>
          </div>
        </header>
        <span>
          <Skeleton className="row-skeleton"></Skeleton>
          <Skeleton className="row-skeleton"></Skeleton>
        </span>
      </Panel>
    </Container>
  );
};

export default LoadingFeedPost;
