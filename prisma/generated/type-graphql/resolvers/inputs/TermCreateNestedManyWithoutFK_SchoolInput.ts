import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermCreateManyFK_SchoolInputEnvelope } from "../inputs/TermCreateManyFK_SchoolInputEnvelope";
import { TermCreateOrConnectWithoutFK_SchoolInput } from "../inputs/TermCreateOrConnectWithoutFK_SchoolInput";
import { TermCreateWithoutFK_SchoolInput } from "../inputs/TermCreateWithoutFK_SchoolInput";
import { TermWhereUniqueInput } from "../inputs/TermWhereUniqueInput";

@TypeGraphQL.InputType("TermCreateNestedManyWithoutFK_SchoolInput", {
  isAbstract: true
})
export class TermCreateNestedManyWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => [TermCreateWithoutFK_SchoolInput], {
    nullable: true
  })
  create?: TermCreateWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [TermCreateOrConnectWithoutFK_SchoolInput], {
    nullable: true
  })
  connectOrCreate?: TermCreateOrConnectWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => TermCreateManyFK_SchoolInputEnvelope, {
    nullable: true
  })
  createMany?: TermCreateManyFK_SchoolInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TermWhereUniqueInput], {
    nullable: true
  })
  connect?: TermWhereUniqueInput[] | undefined;
}
