import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationCreateManyFK_AutomationInput } from "../inputs/CourseOnTermAutomationCreateManyFK_AutomationInput";

@TypeGraphQL.InputType("CourseOnTermAutomationCreateManyFK_AutomationInputEnvelope", {
  isAbstract: true
})
export class CourseOnTermAutomationCreateManyFK_AutomationInputEnvelope {
  @TypeGraphQL.Field(_type => [CourseOnTermAutomationCreateManyFK_AutomationInput], {
    nullable: false
  })
  data!: CourseOnTermAutomationCreateManyFK_AutomationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
