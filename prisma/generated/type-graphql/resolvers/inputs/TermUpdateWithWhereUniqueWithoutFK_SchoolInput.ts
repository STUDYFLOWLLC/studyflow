import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermUpdateWithoutFK_SchoolInput } from "../inputs/TermUpdateWithoutFK_SchoolInput";
import { TermWhereUniqueInput } from "../inputs/TermWhereUniqueInput";

@TypeGraphQL.InputType("TermUpdateWithWhereUniqueWithoutFK_SchoolInput", {
  isAbstract: true
})
export class TermUpdateWithWhereUniqueWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => TermWhereUniqueInput, {
    nullable: false
  })
  where!: TermWhereUniqueInput;

  @TypeGraphQL.Field(_type => TermUpdateWithoutFK_SchoolInput, {
    nullable: false
  })
  data!: TermUpdateWithoutFK_SchoolInput;
}
