export interface ActivityDescription {
  label: string;
  name: string;
  costsSections: Array<string>;
}

export interface GroupDescription {
  label: string;
  name: string;
  activities: Array<ActivityDescription>;
}

export interface FormDescription {
  groups: Array<GroupDescription>;
}

export const getFormDescription = (): Promise<FormDescription> =>
  Promise.resolve<FormDescription>({
    groups: [
      {
        label: "Praca w projekcie",
        name: "projectWork",
        activities: [
          {
            label: "Projekt A",
            name: "projektA",
            costsSections: ["days", "other"]
          },
          {
            label: "Projekt B",
            name: "projektB",
            costsSections: ["days", "other"]
          }
        ]
      },
      {
        label: "Birr",
        name: "birr",
        activities: [
          {
            label: "Birr",
            name: "birr",
            costsSections: ["days", "other"]
          },
          {
            label: "Birr rodzinny",
            name: "familyBirr",
            costsSections: ["days", "other"]
          }
        ]
      }
    ]
  });
