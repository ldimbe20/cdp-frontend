import React, { FC } from "react";
import styled from "@emotion/styled";

import { useAppConfigContext } from "../../app/AppConfigContext";
import useDocumentTitle from "../../hooks/useDocumentTitle";

import { HomeSearchBar } from "../../components/Layout/HomeSearchBar";

import { strings } from "../../assets/LocalizedStrings";
import { screenWidths } from "../../styles/mediaBreakpoints";
import MeetingMenuInfo from "../../components/Details/MeetingMenuInfo/MeetingMenuInfo";

const Container = styled.div({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  "& > *": {
    width: "100%",
  },
  [`@media (min-width:${screenWidths.tablet})`]: {
    "& > *": {
      width: "75%",
    },
  },
  backgroundColor: "#ffbd4f",
});

const MeetingMenu = styled.div({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  flex: 1,
  marginTop: "30px",
  backgroundColor: "#ffffff",
});

const MeetingsHeader = styled.div({
  color: "#ffffff",
  backgroundColor: "#000000",
  paddingTop: "20px",
  paddingBottom: "20px",
  marginTop: "20px",
  width: "75%",
  fontWeight: "bold",
  fontSize: "2.25rem",
  textAlign: "center",
  lineHeight: "1.25",
});

const MeetingCard = styled.div({
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#ffbd4f",
  marginTop: "10px",
  width: "200px",
  border: "solid",
});

const HomePage: FC = () => {
  useDocumentTitle(strings.council_data_project);

  const { municipality } = useAppConfigContext();

  return (
    <>
      <Container>
        <div className="mzp-l-content">
          <h1
            className="mzp-u-title-md"
            style={{
              fontFamily: "Inter, X-LocaleSpecific, sans-serif",
              lineHeight: "1.25",
              paddingTop: "25px",
            }}
          >
            {strings.welcome_to.replace("{municipality_name}", municipality.name)}
          </h1>
          <h6
            className="mzp-u-title-xs"
            style={{
              paddingBottom: "15px",
              fontFamily: "Inter, X-LocaleSpecific, sans-serif",
              fontWeight: "bold",
              fontSize: "1.25rem",
              textAlign: "center",
              lineHeight: "1.25",
            }}
          >
            {strings.superb_search_engine.replace("{municipality_name}", municipality.name)}
          </h6>
          <HomeSearchBar />
        </div>
      </Container>
      <MeetingMenu>
        <MeetingsHeader>{strings.browse_meetings}</MeetingsHeader>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            width: "75%",
            marginTop: "20px",
          }}
        >
          <MeetingCard>
            <div
              style={{
                padding: "10px",
              }}
            >
              <MeetingMenuInfo
                title="Full Text Transcription"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam commodi"
                icon="icon"
              ></MeetingMenuInfo>
            </div>
          </MeetingCard>
          <MeetingCard>
            <div
              style={{
                padding: "10px",
              }}
            >
              <MeetingMenuInfo
                title="Full Text Transcription"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam commodi"
                icon="icon"
              ></MeetingMenuInfo>
            </div>
          </MeetingCard>
          <MeetingCard>
            <div
              style={{
                padding: "10px",
              }}
            >
              <MeetingMenuInfo
                title="Full Text Transcription"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam commodi"
                icon="icon"
              ></MeetingMenuInfo>
            </div>
          </MeetingCard>
        </div>
      </MeetingMenu>
    </>
  );
};

export default HomePage;
