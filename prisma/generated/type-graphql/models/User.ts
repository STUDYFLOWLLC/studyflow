import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Automation } from "../models/Automation";
import { Flow } from "../models/Flow";
import { FlowView } from "../models/FlowView";
import { School } from "../models/School";
import { Setting } from "../models/Setting";
import { Task } from "../models/Task";
import { Term } from "../models/Term";
import { SetupStep } from "../enums/SetupStep";
import { Visibility } from "../enums/Visibility";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UserID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => SetupStep, {
    nullable: false
  })
  SetupStep!: "PROFILE" | "EDUCATION" | "COMMUNITY" | "COMPLETE";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SupabaseID!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Username?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ProfilePictureLink?: string | null;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  DefaultVisibility?: "HIDDEN" | "PRIVATE" | "PUBLIC" | null;

  FK_School?: School | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_SchoolID?: number | null;

  FK_Terms?: Term[];

  FK_Task?: Task[];

  FK_Settings?: Setting | null;

  FK_FlowView?: FlowView[];

  FK_Flow?: Flow[];

  FK_Automation?: Automation[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
