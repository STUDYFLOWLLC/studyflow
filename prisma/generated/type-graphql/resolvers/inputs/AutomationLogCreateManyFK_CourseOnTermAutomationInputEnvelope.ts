import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationLogCreateManyFK_CourseOnTermAutomationInput } from "../inputs/AutomationLogCreateManyFK_CourseOnTermAutomationInput";

@TypeGraphQL.InputType("AutomationLogCreateManyFK_CourseOnTermAutomationInputEnvelope", {
  isAbstract: true
})
export class AutomationLogCreateManyFK_CourseOnTermAutomationInputEnvelope {
  @TypeGraphQL.Field(_type => [AutomationLogCreateManyFK_CourseOnTermAutomationInput], {
    nullable: false
  })
  data!: AutomationLogCreateManyFK_CourseOnTermAutomationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
