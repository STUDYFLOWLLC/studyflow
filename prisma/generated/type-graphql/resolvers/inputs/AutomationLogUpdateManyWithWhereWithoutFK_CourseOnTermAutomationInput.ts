import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationLogScalarWhereInput } from "../inputs/AutomationLogScalarWhereInput";
import { AutomationLogUpdateManyMutationInput } from "../inputs/AutomationLogUpdateManyMutationInput";

@TypeGraphQL.InputType("AutomationLogUpdateManyWithWhereWithoutFK_CourseOnTermAutomationInput", {
  isAbstract: true
})
export class AutomationLogUpdateManyWithWhereWithoutFK_CourseOnTermAutomationInput {
  @TypeGraphQL.Field(_type => AutomationLogScalarWhereInput, {
    nullable: false
  })
  where!: AutomationLogScalarWhereInput;

  @TypeGraphQL.Field(_type => AutomationLogUpdateManyMutationInput, {
    nullable: false
  })
  data!: AutomationLogUpdateManyMutationInput;
}
