import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermScalarWhereInput } from "../inputs/TermScalarWhereInput";
import { TermUpdateManyMutationInput } from "../inputs/TermUpdateManyMutationInput";

@TypeGraphQL.InputType("TermUpdateManyWithWhereWithoutFK_UserInput", {
  isAbstract: true
})
export class TermUpdateManyWithWhereWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => TermScalarWhereInput, {
    nullable: false
  })
  where!: TermScalarWhereInput;

  @TypeGraphQL.Field(_type => TermUpdateManyMutationInput, {
    nullable: false
  })
  data!: TermUpdateManyMutationInput;
}
