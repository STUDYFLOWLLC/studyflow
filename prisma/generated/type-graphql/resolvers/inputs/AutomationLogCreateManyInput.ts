import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("AutomationLogCreateManyInput", {
  isAbstract: true
})
export class AutomationLogCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  AutomationLogID?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  Time?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  Success?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Message?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FileID?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_CourseOnTermAutomationID?: number | undefined;
}
