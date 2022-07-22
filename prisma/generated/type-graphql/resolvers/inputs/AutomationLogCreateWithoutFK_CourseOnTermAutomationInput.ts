import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("AutomationLogCreateWithoutFK_CourseOnTermAutomationInput", {
  isAbstract: true
})
export class AutomationLogCreateWithoutFK_CourseOnTermAutomationInput {
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
}
