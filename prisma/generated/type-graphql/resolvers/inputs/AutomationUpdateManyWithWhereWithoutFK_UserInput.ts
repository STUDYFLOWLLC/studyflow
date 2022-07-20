import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationScalarWhereInput } from "../inputs/AutomationScalarWhereInput";
import { AutomationUpdateManyMutationInput } from "../inputs/AutomationUpdateManyMutationInput";

@TypeGraphQL.InputType("AutomationUpdateManyWithWhereWithoutFK_UserInput", {
  isAbstract: true
})
export class AutomationUpdateManyWithWhereWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => AutomationScalarWhereInput, {
    nullable: false
  })
  where!: AutomationScalarWhereInput;

  @TypeGraphQL.Field(_type => AutomationUpdateManyMutationInput, {
    nullable: false
  })
  data!: AutomationUpdateManyMutationInput;
}
