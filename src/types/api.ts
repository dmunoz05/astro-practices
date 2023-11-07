export type APISpaceXResponse = {
    data: Datum[];
}

export type Datum = {
    flight_number:           number;
    mission_name:            string;
    mission_id:              string[];
    upcoming:                boolean;
    launch_year:             string;
    launch_date_unix:        number;
    launch_date_utc:         Date;
    launch_date_local:       Date;
    is_tentative:            boolean;
    tentative_max_precision: TentativeMaxPrecision;
    tbd:                     boolean;
    launch_window:           number;
    rocket:                  Rocket;
    ships:                   string[];
    telemetry:               Telemetry;
    reuse:                   Reuse;
    launch_site:             LaunchSite;
    launch_success:          boolean;
    launch_failure_details?: LaunchFailureDetails;
    links:                   Links;
    details:                 null | string;
    static_fire_date_utc:    Date | null;
    static_fire_date_unix:   number | null;
    timeline:                { [key: string]: number };
    crew:                    null;
}

export type LaunchFailureDetails = {
    time:     number;
    altitude: number | null;
    reason:   string;
}

export type LaunchSite = {
    site_id:        SiteID;
    site_name:      SiteName;
    site_name_long: SiteNameLong;
}

export enum SiteID {
    CcafsSlc40 = "ccafs_slc_40",
    KwajaleinAtoll = "kwajalein_atoll",
    VafbSlc4E = "vafb_slc_4e",
}

export enum SiteName {
    CcafsSlc40 = "CCAFS SLC 40",
    KwajaleinAtoll = "Kwajalein Atoll",
    VafbSlc4E = "VAFB SLC 4E",
}

export enum SiteNameLong {
    CapeCanaveralAirForceStationSpaceLaunchComplex40 = "Cape Canaveral Air Force Station Space Launch Complex 40",
    KwajaleinAtollOmelekIsland = "Kwajalein Atoll Omelek Island",
    VandenbergAirForceBaseSpaceLaunchComplex4E = "Vandenberg Air Force Base Space Launch Complex 4E",
}

export type Links = {
    mission_patch:       string;
    mission_patch_small: string;
    reddit_campaign:     null;
    reddit_launch:       null | string;
    reddit_recovery:     null;
    reddit_media:        null;
    presskit:            null | string;
    article_link:        string;
    wikipedia:           string;
    video_link:          string;
    youtube_id:          string;
    flickr_images:       string[];
}

export type Reuse = {
    core:       boolean;
    side_core1: boolean;
    side_core2: boolean;
    fairings:   boolean;
    capsule:    boolean;
}

export type Rocket = {
    rocket_id:    RocketID;
    rocket_name:  RocketName;
    rocket_type:  string;
    first_stage:  FirstStage;
    second_stage: SecondStage;
    fairings:     Fairings | null;
}

export type Fairings = {
    reused:           boolean;
    recovery_attempt: boolean;
    recovered:        boolean;
    ship:             null;
}

export type FirstStage = {
    cores: Core[];
}

export type Core = {
    core_serial:     string;
    flight:          number;
    block:           number | null;
    gridfins:        boolean;
    legs:            boolean;
    reused:          boolean;
    land_success:    boolean | null;
    landing_intent:  boolean;
    landing_type:    null | string;
    landing_vehicle: null;
}

export enum RocketID {
    Falcon1 = "falcon1",
    Falcon9 = "falcon9",
}

export enum RocketName {
    Falcon1 = "Falcon 1",
    Falcon9 = "Falcon 9",
}

export type SecondStage = {
    block:    number;
    payloads: Payload[];
}

export type Payload = {
    payload_id:         string;
    norad_id:           number[];
    reused:             boolean;
    customers:          string[];
    nationality?:       string;
    manufacturer?:      null | string;
    payload_type:       PayloadType;
    payload_mass_kg:    number | null;
    payload_mass_lbs:   number | null;
    orbit:              string;
    orbit_params:       OrbitParams;
    cap_serial?:        string;
    mass_returned_kg?:  number | null;
    mass_returned_lbs?: number | null;
    flight_time_sec?:   number;
    cargo_manifest?:    null | string;
}

export type OrbitParams = {
    reference_system:   ReferenceSystem;
    regime:             Regime;
    longitude:          number | null;
    semi_major_axis_km: number | null;
    eccentricity:       number | null;
    periapsis_km:       number | null;
    apoapsis_km:        number | null;
    inclination_deg:    number | null;
    period_min:         number | null;
    lifespan_years:     number | null;
    epoch:              Date | null;
    mean_motion:        number | null;
    raan:               number | null;
    arg_of_pericenter?: number | null;
    mean_anomaly?:      number | null;
}

export enum ReferenceSystem {
    Geocentric = "geocentric",
}

export enum Regime {
    Geostationary = "geostationary",
    LowEarth = "low-earth",
}

export enum PayloadType {
    Dragon10 = "Dragon 1.0",
    DragonBoilerplate = "Dragon Boilerplate",
    Satellite = "Satellite",
}

export type Telemetry = {
    flight_club: null;
}

export enum TentativeMaxPrecision {
    Hour = "hour",
}
