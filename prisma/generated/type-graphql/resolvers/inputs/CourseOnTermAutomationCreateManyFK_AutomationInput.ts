import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CourseOnTermAutomationCreateManyFK_AutomationInput", {
  isAbstract: true
})
export class CourseOnTermAutomationCreateManyFK_AutomationInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  CourseOnTermAutomationID?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FolderID?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_CourseOnTermID?: number | undefined;
}
