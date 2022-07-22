import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CourseOnTermAutomation } from "../models/CourseOnTermAutomation";
import { User } from "../models/User";
import { AutomationCount } from "../resolvers/outputs/AutomationCount";

@TypeGraphQL.ObjectType("Automation", {
  isAbstract: true
})
export class Automation {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  AutomationID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  RefreshToken!: string;

  CourseOnTermAutomations?: CourseOnTermAutomation[];

  FK_User?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FK_UserID!: number;

  @TypeGraphQL.Field(_type => AutomationCount, {
    nullable: true
  })
  _count?: AutomationCount | null;
}
