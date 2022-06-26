import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermCreateWithoutFK_SchoolInput } from "../inputs/TermCreateWithoutFK_SchoolInput";
import { TermUpdateWithoutFK_SchoolInput } from "../inputs/TermUpdateWithoutFK_SchoolInput";
import { TermWhereUniqueInput } from "../inputs/TermWhereUniqueInput";

@TypeGraphQL.InputType("TermUpsertWithWhereUniqueWithoutFK_SchoolInput", {
  isAbstract: true
})
export class TermUpsertWithWhereUniqueWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => TermWhereUniqueInput, {
    nullable: false
  })
  where!: TermWhereUniqueInput;

  @TypeGraphQL.Field(_type => TermUpdateWithoutFK_SchoolInput, {
    nullable: false
  })
  update!: TermUpdateWithoutFK_SchoolInput;

  @TypeGraphQL.Field(_type => TermCreateWithoutFK_SchoolInput, {
    nullable: false
  })
  create!: TermCreateWithoutFK_SchoolInput;
}
