import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorCreateManyFK_SchoolInputEnvelope } from "../inputs/ProfessorCreateManyFK_SchoolInputEnvelope";
import { ProfessorCreateOrConnectWithoutFK_SchoolInput } from "../inputs/ProfessorCreateOrConnectWithoutFK_SchoolInput";
import { ProfessorCreateWithoutFK_SchoolInput } from "../inputs/ProfessorCreateWithoutFK_SchoolInput";
import { ProfessorWhereUniqueInput } from "../inputs/ProfessorWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorCreateNestedManyWithoutFK_SchoolInput", {
  isAbstract: true
})
export class ProfessorCreateNestedManyWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => [ProfessorCreateWithoutFK_SchoolInput], {
    nullable: true
  })
  create?: ProfessorCreateWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorCreateOrConnectWithoutFK_SchoolInput], {
    nullable: true
  })
  connectOrCreate?: ProfessorCreateOrConnectWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => ProfessorCreateManyFK_SchoolInputEnvelope, {
    nullable: true
  })
  createMany?: ProfessorCreateManyFK_SchoolInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProfessorWhereUniqueInput], {
    nullable: true
  })
  connect?: ProfessorWhereUniqueInput[] | undefined;
}
