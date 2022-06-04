import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorCreateOrConnectWithoutFK_CoursesInput } from "../inputs/ProfessorCreateOrConnectWithoutFK_CoursesInput";
import { ProfessorCreateWithoutFK_CoursesInput } from "../inputs/ProfessorCreateWithoutFK_CoursesInput";
import { ProfessorUpdateWithoutFK_CoursesInput } from "../inputs/ProfessorUpdateWithoutFK_CoursesInput";
import { ProfessorUpsertWithoutFK_CoursesInput } from "../inputs/ProfessorUpsertWithoutFK_CoursesInput";
import { ProfessorWhereUniqueInput } from "../inputs/ProfessorWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorUpdateOneRequiredWithoutFK_CoursesInput", {
  isAbstract: true
})
export class ProfessorUpdateOneRequiredWithoutFK_CoursesInput {
  @TypeGraphQL.Field(_type => ProfessorCreateWithoutFK_CoursesInput, {
    nullable: true
  })
  create?: ProfessorCreateWithoutFK_CoursesInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorCreateOrConnectWithoutFK_CoursesInput, {
    nullable: true
  })
  connectOrCreate?: ProfessorCreateOrConnectWithoutFK_CoursesInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorUpsertWithoutFK_CoursesInput, {
    nullable: true
  })
  upsert?: ProfessorUpsertWithoutFK_CoursesInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorWhereUniqueInput, {
    nullable: true
  })
  connect?: ProfessorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorUpdateWithoutFK_CoursesInput, {
    nullable: true
  })
  update?: ProfessorUpdateWithoutFK_CoursesInput | undefined;
}
