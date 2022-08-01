import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CourseOnTerm } from "../models/CourseOnTerm";
import { FlashCardStack } from "../models/FlashCardStack";
import { FlowView } from "../models/FlowView";
import { Task } from "../models/Task";
import { User } from "../models/User";
import { FlowType } from "../enums/FlowType";
import { Visibility } from "../enums/Visibility";
import { FlowCount } from "../resolvers/outputs/FlowCount";

@TypeGraphQL.ObjectType("Flow", {
  isAbstract: true
})
export class Flow {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  FlowID!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  LastOpened!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  UserEnteredDate!: Date;

  @TypeGraphQL.Field(_type => FlowType, {
    nullable: false
  })
  Type!: "LECTURE" | "DISCUSSION" | "NOTE" | "ASSIGNMENT" | "ASSESSMENT" | "SYNTHESIS";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Title!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  Trashed!: boolean;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: false
  })
  Visibility!: "HIDDEN" | "PRIVATE" | "PUBLIC";

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  WasAutomated!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Body?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DeletedTime?: Date | null;

  FK_CourseOnTerm?: CourseOnTerm | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_CourseOnTermID?: number | null;

  FK_FlashCardStacks?: FlashCardStack[];

  FK_Tasks?: Task[];

  FK_FlowView?: FlowView[];

  FK_User?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserID?: number | null;

  @TypeGraphQL.Field(_type => FlowCount, {
    nullable: true
  })
  _count?: FlowCount | null;
}
